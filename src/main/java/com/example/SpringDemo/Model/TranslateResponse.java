package com.example.SpringDemo.Model;

public class TranslateResponse {
    private String translatedText;

    public TranslateResponse(String translatedText) {
        this.translatedText = translatedText;
    }

    public String getTranslatedText() {
        return translatedText;
    }
}
