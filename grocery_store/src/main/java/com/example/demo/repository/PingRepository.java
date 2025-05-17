package com.example.demo.repository;
import com.example.demo.model.Ping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PingRepository extends JpaRepository<Ping, Long> {}