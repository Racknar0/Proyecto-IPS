package com.example.proyecto_c32.controlador;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyecto_c32.modelo.Paciente;
import com.example.proyecto_c32.service.Paciente_service;
@RestController // decorador para procesar todas las peticiones http
@CrossOrigin(origins = "*", allowedHeaders = "*")


public class Paciente_Controller {
/* @Autowired
private Paciente_repository Paciente_repository;
@Autowired
private diagnostico_repository diagnostico_repository; */
@Autowired
private Paciente_service paciente_service;

@GetMapping
    public List<Paciente> obtenerpacients() {
      return paciente_service.obtenerpacientes();
  }

@GetMapping ("/{id}")
    public Optional<Paciente> obtenerpacienteporid(@PathVariable int id) {
      return paciente_service.obtenerpacientesporid(id);
  }
    


@DeleteMapping ("/{id}")
public ResponseEntity<Paciente> borrarPaciente(@PathVariable int id){
      paciente_service.borrarPaciente(id);
     //Retornar el paciente borrado
      return new ResponseEntity<Paciente>(HttpStatus.OK);
}

@PostMapping
public ResponseEntity<Paciente> guardarPaciente(@RequestBody  Paciente paciente){
     paciente_service.guardarPaciente(paciente);
     System.out.println(paciente.toString());
        //retornar el paciente guardado
      return new ResponseEntity<>(paciente, HttpStatus.CREATED);

} 

@PutMapping("/{id}")
public Paciente editarPaciente(@PathVariable("id") int id, @RequestBody Paciente paciente){
     return paciente_service.editarPaciente(id, paciente);
} 

}
