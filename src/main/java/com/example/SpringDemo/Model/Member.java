package com.example.SpringDemo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.sql.Timestamp;
import lombok.Data;
import java.time.Instant;

@Entity
@Table(name = "Member")
@Data
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "user_id", unique = true, nullable = false)
    private String userId;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

//    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
//    @Column(name = "created_at")
//    private Timestamp createdAt;


    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
    @Column(name = "created_at", updatable = false)
    private Timestamp createdAt;

    // @PrePersist로 엔티티 저장 전에 createdAt에 현재 시간 설정
    @PrePersist
    protected void onCreate() {
        this.createdAt = Timestamp.from(Instant.now());  // 현재 시간을 설정
    }

}
