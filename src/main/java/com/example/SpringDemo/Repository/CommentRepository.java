package com.example.SpringDemo.Repository;

import com.example.SpringDemo.Model.Board;
import com.example.SpringDemo.Model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findByPostId(int postId);
}
