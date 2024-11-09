package com.example.SpringDemo.Services;

import com.example.SpringDemo.Model.TranslateRequest;
import com.example.SpringDemo.Model.TranslateResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

@Service
public class TranslateService {

    @Value("${openai.api.key}")  // application.properties에서 OpenAI API 키를 불러옴
    private String openAiApiKey;

    private RestTemplate restTemplate;

    public TranslateService() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(3000); // 연결 타임아웃 5초
        factory.setReadTimeout(3000);    // 읽기 타임아웃 5초
        this.restTemplate = new RestTemplate(factory);
    }

    public TranslateResponse translateText(TranslateRequest translateRequest) throws Exception {
        String openAiUrl = "https://api.openai.com/v1/chat/completions";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(openAiApiKey);  // Bearer 토큰 설정

        String requestBody = "{ \"model\": \"gpt-4o\", " +
                "\"messages\": [{\"role\": \"user\", \"content\": \"Translate the following text to English: "
                + translateRequest.getPrompt() + "\"}], \"max_tokens\": 100 }";

        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);


        ResponseEntity<String> response = restTemplate.exchange(openAiUrl, HttpMethod.POST, entity, String.class);

        if (response.getStatusCode() == HttpStatus.OK) {

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(response.getBody());
            String translatedText = rootNode.path("choices").get(0).path("message").path("content").asText();

            System.out.println("번역된 텍스트: " + translatedText);


            return new TranslateResponse(translatedText);
        } else {

            throw new Exception("OpenAI API 호출 실패: " + response.getStatusCode());
        }
    }
}