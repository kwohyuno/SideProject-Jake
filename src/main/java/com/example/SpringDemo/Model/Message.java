package com.example.SpringDemo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.time.Instant;

@Entity
@Table(name = "Messages")
@Data
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "sender_id", unique = true, nullable = false)
    private String senderId;

    @Column(name = "receiver_id", unique = true, nullable = false)
    private String receiverId;

    @Column(name = "message_text", unique = true, nullable = false)
    private String messageText;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
    @Column(name = "timestamp", updatable = false)
    private Timestamp timestamp;


    @PrePersist
    protected void onCreate() {
        this.timestamp = Timestamp.from(Instant.now());
    }

}


