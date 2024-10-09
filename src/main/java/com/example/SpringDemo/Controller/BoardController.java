package com.example.SpringDemo.Controller;

import com.example.SpringDemo.Model.Board;
import com.example.SpringDemo.Services.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
@CrossOrigin
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @PostMapping("/create")
    public Board createBoard(@RequestBody Board board) {
        return boardService.createBoard(board);
    }

    @GetMapping
    public List<Board> getAllBoard() {
        return boardService.getAllBoard();
    }

    @GetMapping("/detail/{boardId}")
    public Board getBoardDetail(@PathVariable int boardId) {
        return boardService.getBoardDetail(boardId);
    }

    @DeleteMapping("/detail/{boardId}")
    public void deleteBoard(@PathVariable int boardId) {
        boardService.deleteBoard(boardId);
    }

    @PostMapping("/update/{boardId}")
    public Board updateBoard(@PathVariable int boardId, @RequestBody Board board) {
        return boardService.updateBoard(boardId,board);
    }

}
