package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ping")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Ping {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String message;
}