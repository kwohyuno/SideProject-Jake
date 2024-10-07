package com.example.SpringDemo.Controller;

import com.example.SpringDemo.Model.Member;
import com.example.SpringDemo.Services.LoginService;
import com.example.SpringDemo.Services.MemberService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public Member login(@RequestBody Member member) {
        return loginService.login(member);
    }
}
