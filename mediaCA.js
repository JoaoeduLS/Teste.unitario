function mediaCA(notaDoAluno) {
  if (notaDoAluno >= 9.0 && notaDoAluno <= 10) {
    console.log("SS");
  } else if (notaDoAluno >= 7.0 && notaDoAluno < 9) {
    console.log("MS");
  } else if (notaDoAluno >= 5.0 && notaDoAluno < 7.0) {
    console.log("MM");
  } else if (notaDoAluno >= 3.0 && notaDoAluno < 5.0) {
    console.log("MI");
  } else if (notaDoAluno >= 0.1 && notaDoAluno < 3.0) {
    console.log("II");
  } else if (notaDoAluno == 0) {
    console.log("SR");
  } else {
    console.log("O aluno nao possui nota");
  }
}
