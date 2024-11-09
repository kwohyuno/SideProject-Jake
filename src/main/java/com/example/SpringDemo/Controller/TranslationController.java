package com.example.SpringDemo.Controller;

import com.example.SpringDemo.Model.TranslateRequest;
import com.example.SpringDemo.Model.TranslateResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.SpringDemo.Services.TranslateService;

@RestController
@RequestMapping
@CrossOrigin
public class TranslationController {

    private final TranslateService translateService;

    @Autowired
    public TranslationController(TranslateService translateService) {
        this.translateService = translateService;
    }

//    @PostMapping("/translate")
//    public ResponseEntity<?> translateText(@RequestBody TranslateRequest request) {
//        try {
//            String translatedText = translateService.translateText(request.getPrompt());
//            return ResponseEntity.ok().body(new TranslateResponse(translatedText));
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Error occurred while translating text");
//        }
//    }

    @PostMapping("/translate")
    public TranslateResponse translate(@RequestBody TranslateRequest translateRequest) throws Exception {
        return translateService.translateText(translateRequest);
    }
}
