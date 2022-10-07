package com.example.proyecto_c32.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.proyecto_c32.modelo.Exploracion_fisica;

@Repository
public interface Exploracion_fisica_repository extends JpaRepository<Exploracion_fisica, Integer> {

    
}