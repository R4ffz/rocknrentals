package com.rocknrentals.backend.service;

import com.rocknrentals.backend.model.User;
import com.rocknrentals.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Obter todos os usuários
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Obter usuário por ID
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    // Criar novo usuário
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Atualizar usuário existente
    public User updateUser(Long id, User userDetails) {
        User user = getUserById(id);
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setDateOfBirth(userDetails.getDateOfBirth());
        return userRepository.save(user);
    }

    // Deletar usuário
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // Autenticar usuário
    public User authenticateUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password)
                .orElseThrow(() -> new RuntimeException("Usuário ou senha inválidos"));
    }
}
