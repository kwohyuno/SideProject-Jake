package com.example.SpringDemo.Repository;

import com.example.SpringDemo.Model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Optional<Member> findByUserId(String userId);
}
