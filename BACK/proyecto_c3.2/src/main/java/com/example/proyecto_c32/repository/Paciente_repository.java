package com.example.proyecto_c32.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.proyecto_c32.modelo.Paciente;

@Repository
public interface Paciente_repository extends JpaRepository <Paciente, Integer> {
    
}
