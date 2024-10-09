package com.example.SpringDemo.Services;

import java.util.*;
import com.example.SpringDemo.Model.Board;
import com.example.SpringDemo.Model.Member;
import com.example.SpringDemo.Repository.BoardRepository;
import com.example.SpringDemo.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.SpringDemo.Services.MemberService;

import java.util.List;

@Service
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository, MemberRepository memberRepository) {
        this.boardRepository = boardRepository;
        this.memberRepository = memberRepository;
    }

    public Board createBoard(Board board) {
        Member member = memberRepository.findByUserId(board.getAuthorId())
                .orElseThrow(() -> new IllegalArgumentException("Author not found"));

        Board newBoard = new Board();
        newBoard.setTitle(board.getTitle());
        newBoard.setContent(board.getContent());
        newBoard.setAuthorId(member.getUserId());

        return boardRepository.save(newBoard);
    }

    public List<Board> getAllBoard() {
        return boardRepository.findAll();
    }

    public Board getBoardDetail(int boardId) {
        return boardRepository.findById(boardId).orElseThrow(() -> new IllegalArgumentException("Board not found"));
    }

    public void deleteBoard(int boardId) {
            boardRepository.deleteById(boardId);
    }

    public Board updateBoard(int boardId, Board board) {
        // Find the existing board by ID
        Board existingBoard = boardRepository.findById(boardId)
                .orElseThrow(() -> new IllegalArgumentException("Board with ID " + boardId + " not found"));

        // Update the fields of the existing board with the new values
        existingBoard.setTitle(board.getTitle());
        existingBoard.setContent(board.getContent());

        // Save and return the updated board
        return boardRepository.save(existingBoard);
    }
}
