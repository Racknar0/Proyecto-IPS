package com.example.proyecto_c32.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.proyecto_c32.modelo.Antecedentes_no_patologicos;

@Repository
public interface Antecedentes_no_patologicos_repository extends JpaRepository<Antecedentes_no_patologicos, Integer> {

    
}