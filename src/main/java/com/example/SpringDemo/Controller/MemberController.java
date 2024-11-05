package com.example.SpringDemo.Controller;

import com.example.SpringDemo.Model.Member;
import com.example.SpringDemo.Services.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
@CrossOrigin
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/create")
    public Member createMember(@RequestBody Member member) {
        return memberService.createMember(member);
    }

    @GetMapping("/")
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    @PostMapping("/update")
    public Member updateMember(@RequestBody Member member) {
        return memberService.updateMember(member);
    }
}


