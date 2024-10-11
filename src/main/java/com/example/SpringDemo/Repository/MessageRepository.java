package com.example.SpringDemo.Repository;

import com.example.SpringDemo.Model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Integer> {
}
