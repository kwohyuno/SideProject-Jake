package com.example.SpringDemo.Repository;

import com.example.SpringDemo.Model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Integer> {
}
