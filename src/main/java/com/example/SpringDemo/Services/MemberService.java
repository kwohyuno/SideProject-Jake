package com.example.SpringDemo.Services;

import com.example.SpringDemo.Model.Member;
import com.example.SpringDemo.Repository.MemberRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

import java.util.List;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public MemberService(MemberRepository memberRepository) {

        this.memberRepository = memberRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public Member createMember(Member member) {
        String hashedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(hashedPassword);
        return memberRepository.save(member);
    }

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }


    public Member updateMember(Member member) {

        Optional<Member> existingMemberOpt = memberRepository.findByUserId(member.getUserId());

        if (existingMemberOpt.isPresent()) {
            Member existingMember = existingMemberOpt.get();


            if (member.getPassword() != null) {
                existingMember.setPassword(passwordEncoder.encode(member.getPassword()));
            }
            if (member.getEmail() != null) {
                existingMember.setEmail(member.getEmail());
            }

            return memberRepository.save(existingMember);
        } else {

            member.setPassword(passwordEncoder.encode(member.getPassword())); // 비밀번호 암호화
            return memberRepository.save(member);
        }
    }
}
