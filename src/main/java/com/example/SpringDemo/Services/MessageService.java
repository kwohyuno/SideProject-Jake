package com.example.SpringDemo.Services;

import com.example.SpringDemo.Model.Conversation;
import com.example.SpringDemo.Model.Message;
import com.example.SpringDemo.Repository.ConversationRepository;
import com.example.SpringDemo.Repository.MemberRepository;
import com.example.SpringDemo.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    private final ConversationRepository conversationRepository;
    private final MessageRepository messageRepository;

    @Autowired
    public MessageService(ConversationRepository conversationRepository, MessageRepository messageRepository) {
        this.conversationRepository = conversationRepository;
        this.messageRepository = messageRepository;
    }

    public Conversation startConversation(String participant1, String participant2){
        List<Conversation> conversations = conversationRepository.findAll();
        boolean ifExists = false;
        Conversation existingConversation = null;
        for(Conversation cv : conversations){
            if(cv.getUserOneId().equals(participant1) && cv.getUserTwoId().equals(participant2)
            || cv.getUserOneId().equals(participant2) && cv.getUserTwoId().equals(participant1)){
                ifExists = true;
                existingConversation = cv;
                break;
            }
        }

        if(!ifExists){
            Conversation newConversation = new Conversation();
            newConversation.setUserOneId(participant1);
            newConversation.setUserTwoId(participant2);
            return conversationRepository.save(newConversation);
        }else{
            return existingConversation;
        }
    }

    public List<Conversation> getAllChatrooms(String loginUser){
        List<Conversation> conversations = null;

        List<Conversation> tmp = conversationRepository.findAll();
        for(Conversation c : tmp){
            if(c.getUserOneId().equals(loginUser)
                    || c.getUserOneId().equals(loginUser)){
                conversations.add(c);
            }
        }
        return conversations;
    }

    public List<Message> getAllMessage(String participant1, String participant2){
        List<Message> messages = null;
        List<Message> tmp = messageRepository.findAll();
        for(Message m : tmp){
            if(m.getSenderId().equals(participant1) && m.getReceiverId().equals(participant2)
                    || m.getSenderId().equals(participant2) && m.getReceiverId().equals(participant1)){
                messages.add(m);
            }
        }
        return messages;
    }


    public Message sendMessage(int conversationId, String senderId, String messageText){
        Message message = new Message();
        message.setConversationId(conversationId);
        message.setSenderId(senderId);
        message.setMessageText(messageText);

        return messageRepository.save(message);
    }



}
