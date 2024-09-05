package com.example.SpringDemo.Repository;

import com.example.SpringDemo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
