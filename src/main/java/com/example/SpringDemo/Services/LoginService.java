package com.example.SpringDemo.Services;

import com.example.SpringDemo.Model.Member;
import com.example.SpringDemo.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public LoginService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }


    public Member login(Member member) {
        Optional<Member> foundMember = memberRepository.findByUserId(member.getUserId());

        if (foundMember.isPresent()) {
            Member existingMember = foundMember.get();

            // 사용자가 입력한 원본 비밀번호 (raw password)
            String rawPassword = member.getPassword();
            // 데이터베이스에 저장된 해시된 비밀번호
            String hashedPassword = existingMember.getPassword();

            // 비밀번호 일치 여부 확인
            if (passwordEncoder.matches(rawPassword, hashedPassword)) {
                return existingMember;  // 비밀번호가 일치하면 해당 멤버 반환
            } else {
                return null;  // 비밀번호가 일치하지 않으면 null 반환
            }

//            if (existingMember.getPassword().equals(member.getPassword())) {
//                return existingMember;
//            }else {
//                return null;
//            }
        }else {
            return null;
        }

    }
}
