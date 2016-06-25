package br.com.controler;

import static javax.ws.rs.core.Response.Status.BAD_REQUEST;
import static javax.ws.rs.core.Response.Status.NOT_FOUND;
import static javax.ws.rs.core.Response.Status.OK;

import java.util.ArrayList;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.google.gson.Gson;

import br.com.bean.Pesquisador;


public class PesquisaControl {
	

	private static final PesquisaControl instance = new PesquisaControl();
	private ArrayList<Pesquisador> aPesquisador = new ArrayList<Pesquisador>();
	
	
	private PesquisaControl() {
		insertPesquisadorDefault();
	}

	public static PesquisaControl getInstance() {
		return instance;
	}

	
	// ========= CHART =============
	public Response insertPesquisador(Pesquisador pesquisador) {
		String message;
		if (pesquisador.getNome().isEmpty()) {
			message = "Não defina o atributo \"Nome\"";
			return Response.status(BAD_REQUEST).entity(message).build();
		}
		addMyPesquisador(pesquisador);
		message = "[]";
		return Response.status(OK).entity(message).build();
	}

	
	public Response loadAllPesquisador() {
		Status status = (this.aPesquisador.size() > 0 ? OK : NOT_FOUND);
		return Response.status(status).entity(this.aPesquisador).build();
	}
	
	private void addMyPesquisador(Pesquisador myP) {
		for (int i = 0; i < this.aPesquisador.size(); i++) {
			// da um update se ja existe
			if (this.aPesquisador.get(i).getCpf().equals(myP.getClass())){
				this.aPesquisador.set(i, myP);
				return;
			}
		}
		this.aPesquisador.add(myP);
	}
	
	
	public Response deletePesquisador(String cpf) {
		String message;
		if (deleteMyPesquisadorByCpf(cpf)) {
			message = "[]";
			return Response.status(OK).entity(message).build();
		} else {
			message = "Registro não encontrado para deleção";
			return Response.status(NOT_FOUND).entity(message).build();
		}

	}
	
	private boolean deleteMyPesquisadorByCpf(String cpf) {
		for (int i = 0; i < this.aPesquisador.size(); i++) {
			if (this.aPesquisador.get(i).getCpf().equals(cpf)) {
				this.aPesquisador.remove(i);
				return true;
			}
		}
		return false;
	}

	
	private void insertPesquisadorDefault(){
		Pesquisador p1 = new Pesquisador();
		p1.setCpf("64241432204");
		p1.setNome("Moacyr Franco ");
		p1.setLogin("moca");
		p1.setSenha("123");
		
		Pesquisador p2 = new Pesquisador();
		p2.setCpf("8841432204");
		p2.setNome("Marcelo Junior ");
		p2.setLogin("marceo");
		p2.setSenha("123");
		
	    addMyPesquisador(p1);
	    addMyPesquisador(p2);

	}
	
}
