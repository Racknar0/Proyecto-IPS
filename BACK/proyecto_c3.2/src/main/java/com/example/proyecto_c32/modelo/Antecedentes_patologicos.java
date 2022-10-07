package com.example.proyecto_c32.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name="antecedentes_patologicos")
public class Antecedentes_patologicos {
@Id
@GeneratedValue (strategy = GenerationType.AUTO)
@Column(name="id_antecedentespatologicos")
private int id_antecedentespatologicos;
@Column(name="pulmonares")
private Boolean pulmonares;
@Column(name="cardiacos")
private Boolean cardiacos;
@Column(name="digestivos")
private Boolean digestivos;
@Column(name="endocrinos")
private Boolean endocrinos;
@Column(name="genitourinarios")
private Boolean genitourinarios;
@Column(name="hematologicos")
private Boolean hematologicos;
@Column(name="neurologicos")
private Boolean neurologicos;
@Column(name="psiquiatricos")
private Boolean psiquiatricos;
@Column(name="traumatologicos")
private Boolean traumatologicos;

@ManyToOne
/*  @JoinColumn (name= "id_paciente", referencedColumnName= "id")
 */Paciente paciente;

}
