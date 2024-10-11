package com.example.SpringDemo.Repository;

import com.example.SpringDemo.Model.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversationRepository extends JpaRepository<Conversation, Integer> {

}
