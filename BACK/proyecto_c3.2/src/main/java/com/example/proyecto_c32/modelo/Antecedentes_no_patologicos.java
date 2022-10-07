package com.example.proyecto_c32.modelo;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.ToString;
import lombok.NoArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table (name="antecedentes_no_patologicos")
public class Antecedentes_no_patologicos {
@Id
@GeneratedValue (strategy = GenerationType.AUTO)
@Column(name="id_antecedentesnopatologicos")
private int id_antecedentesnopatologicos;
@Column(name="alcoholismo")
private Boolean alcoholismo;
@Column(name="tabaquismo")
private Boolean tabaquismo;
@Column(name="drogadiccion")
private Boolean drogadiccion;
@Column(name="alergias")
private Boolean alergias;
@Column(name="cirugias")
private Boolean cirugias;


@ManyToOne
/*  @JoinColumn (name= "id_paciente", referencedColumnName= "id")
 */Paciente paciente;



}
