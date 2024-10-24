package com.example.SpringDemo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // CSRF 보호 비활성화 (필요한 경우)
                .cors(Customizer.withDefaults()) // CORS 기본 설정 활성화
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/**").permitAll()  // "/public/**" 경로는 인증 없이 접근 가능
                        .anyRequest().authenticated()  // 그 외의 모든 요청은 인증 필요
                );

        return http.build();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);  // 자격 증명 허용 (쿠키, 인증 정보 등)
        config.addAllowedOrigin("http://localhost:3000");  // 허용할 도메인 설정
        config.addAllowedHeader("*");  // 모든 헤더 허용
        config.addAllowedMethod("*");  // 모든 HTTP 메소드 허용
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}

