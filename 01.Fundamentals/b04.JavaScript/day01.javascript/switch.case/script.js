let statusPessoa = "banana";

switch (statusPessoa) {
	case ("aprovada"):
		console.log("Parabéns, você foi aprovado(a)");
		break;
	case ("lista"):
		console.log("você está na lista de espera");
		break;
	case ("reprovado(a)"):
		console.log("você foi reprovado(a)");
		break;
	default:
		console.log("não se aplica");
}
