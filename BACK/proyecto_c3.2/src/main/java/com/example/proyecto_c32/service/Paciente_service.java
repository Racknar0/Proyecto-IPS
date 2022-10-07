package com.example.proyecto_c32.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyecto_c32.modelo.Paciente;
import com.example.proyecto_c32.repository.Paciente_repository;


@Service
public class Paciente_service {
    @Autowired
    private Paciente_repository paciente_repository;

    public void guardarPaciente(Paciente paciente){
        paciente_repository.save(paciente);
    }

    public void borrarPaciente(int id){
        paciente_repository.deleteById(id);
    }

    public Optional<Paciente> obtenerpacientesporid(int id){
        return paciente_repository.findById(id);
        }

    public List<Paciente> obtenerpacientes() {
        return paciente_repository.findAll();
            } 

    public Paciente editarPaciente(int id, Paciente paciente) {
        Paciente pacienteactual = paciente_repository.findById(id).get();
            BeanUtils.copyProperties(paciente, pacienteactual, "id");
                 return paciente_repository.save(pacienteactual);
            
            
            }

}
  