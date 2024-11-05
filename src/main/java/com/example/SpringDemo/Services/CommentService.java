package com.example.SpringDemo.Services;

import com.example.SpringDemo.Model.Board;
import com.example.SpringDemo.Model.Comment;
import com.example.SpringDemo.Model.Member;
import com.example.SpringDemo.Repository.BoardRepository;
import com.example.SpringDemo.Repository.CommentRepository;
import com.example.SpringDemo.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {



    private final CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public List<Comment> getAllComment(int postId) {

        return commentRepository.findByPostId(postId);
    }

    public void deleteComment(int commentId) {
        commentRepository.deleteById(commentId);
    }


}
