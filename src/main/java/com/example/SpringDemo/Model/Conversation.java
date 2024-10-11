package com.example.SpringDemo.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Conversations")
@Data
public class Conversation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "participant1_id", unique = true, nullable = false)
    private String userOneId;

    @Column(name = "participant2_id", unique = true, nullable = false)
    private String userTwoId;

}
