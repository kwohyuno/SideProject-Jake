package com.example.SpringDemo.Services;

import com.example.SpringDemo.Model.Member;
import com.example.SpringDemo.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    private final MemberRepository memberRepository;

    public LoginService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    public Member login(Member member) {
        Optional<Member> foundMember = memberRepository.findByUserId(member.getUserId());

        if (foundMember.isPresent()) {
            Member existingMember = foundMember.get();

            if (existingMember.getPassword().equals(member.getPassword())) {
                return existingMember;
            }else {
                return null;
            }
        }else {
            return null;
        }

    }
}
