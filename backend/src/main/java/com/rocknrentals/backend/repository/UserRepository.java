package com.rocknrentals.backend.repository;

import com.rocknrentals.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Método para encontrar usuário pelo email e senha
    Optional<User> findByEmailAndPassword(String email, String password);
}
