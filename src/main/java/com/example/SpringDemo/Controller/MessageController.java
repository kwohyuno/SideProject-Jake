package com.example.SpringDemo.Controller;


import com.example.SpringDemo.Model.Conversation;
import com.example.SpringDemo.Model.ConversationRequest;
import com.example.SpringDemo.Model.Message;
import com.example.SpringDemo.Services.MemberService;
import com.example.SpringDemo.Services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
@CrossOrigin
public class MessageController {

    private final MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping("/startconverse")
    public Conversation startConversation(@RequestBody ConversationRequest request) {
        return messageService.startConversation(request.getParticipant1(), request.getParticipant2());
    }

    @GetMapping("/getallchatrooms")
    public List<Conversation> getAllChatrooms(@RequestParam String loginUser){
        return messageService.getAllChatrooms(loginUser);
    }

    @GetMapping("/getmessage")
    public List<Message> getAllMessage(String participant1, String participant2){
        return messageService.getAllMessage(participant1, participant2);
    }

    @PostMapping("/sendmessage")
    public Message sendMessage(@RequestBody Message messagedto){

        return messageService.sendMessage(messagedto);
    }

}
