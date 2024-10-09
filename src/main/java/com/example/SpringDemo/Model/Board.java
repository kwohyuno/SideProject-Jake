package com.example.SpringDemo.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.sql.Timestamp;
import java.time.Instant;

@Entity
@Table(name = "Board")
@Data
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name="author_id",nullable=false)
    private String authorId;
    // 글쓴이: Member 테이블의 id를 참조하는 외래 키

    @Column(name = "likes", nullable = false)
    private Integer likes = 0;  // 좋아요 갯수 기본값 0

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
    @Column(name = "created_at", updatable = false)
    private Timestamp createdAt;

    // @PrePersist로 엔티티 저장 전에 createdAt에 현재 시간 설정
    @PrePersist
    protected void onCreate() {
        this.createdAt = Timestamp.from(Instant.now());  // 현재 시간을 설정
    }
}