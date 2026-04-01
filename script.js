<script>
let rounds = 0;
let correct = 0;

function toss() {
  const guess = document.getElementById("guess").value.toLowerCase();
  const coin = document.getElementById("coin");
  const msg = document.getElementById("msg");
  const stats = document.getElementById("stats");

  if (guess !== "head" && guess !== "tail") {
    msg.innerText = "Enter Head or Tail!";
    return;
  }

  const result = Math.random() < 0.5 ? "head" : "tail";

  coin.innerText = result === "head" ? "H" : "T";

  rounds++;

  if (guess === result) {
    correct++;
    msg.innerText = "✅ Correct!";
  } else {
    msg.innerText = "❌ Wrong!";
  }

  stats.innerText = `Rounds: ${rounds} | Correct: ${correct}`;
}
</script>