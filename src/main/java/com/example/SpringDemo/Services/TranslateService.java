package com.example.SpringDemo.Services;

import com.example.SpringDemo.Model.TranslateRequest;
import com.example.SpringDemo.Model.TranslateResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
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

    private final RestTemplate restTemplate = new RestTemplate();

    public TranslateResponse translateText(TranslateRequest translateRequest) throws Exception {
        String openAiUrl = "https://api.openai.com/v1/chat/completions";

        // 요청 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(openAiApiKey);  // Bearer 토큰 설정

        // 요청 본문 설정
        String requestBody = "{ \"model\": \"gpt-4o\", " +
                "\"messages\": [{\"role\": \"user\", \"content\": \"Translate the following text to English: "
                + translateRequest.getPrompt() + "\"}], \"max_tokens\": 100 }";

        // 요청 본문 설정
//        String requestBody = "{ \"model\": \"gpt-4o-mini\", \"prompt\": \"Translate to English: "
//                + translateRequest.getPrompt() + "\", \"max_tokens\": 100 }";

        // HttpEntity에 요청 본문과 헤더를 설정
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        // OpenAI API 호출
        ResponseEntity<String> response = restTemplate.exchange(openAiUrl, HttpMethod.POST, entity, String.class);

        Thread.sleep(10000);

        if (response.getStatusCode() == HttpStatus.OK) {
            // JSON 응답을 파싱하여 번역된 텍스트를 추출
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(response.getBody());
            String translatedText = rootNode.path("choices").get(0).path("message").path("content").asText();

            System.out.println("번역된 텍스트: " + translatedText);

            // 번역된 텍스트를 반환
            return new TranslateResponse(translatedText);
        } else {
            // 오류 처리
            throw new Exception("OpenAI API 호출 실패: " + response.getStatusCode());
        }
    }
}
