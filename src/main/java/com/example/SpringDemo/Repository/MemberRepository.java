package com.example.SpringDemo.Repository;

import com.example.SpringDemo.Model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {

}
