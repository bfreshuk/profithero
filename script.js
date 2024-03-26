function calculateStakes() {
    var oddsA = parseFloat(document.getElementById("odds-a").value);
    var oddsB = parseFloat(document.getElementById("odds-b").value);
    var stakeA = parseFloat(document.getElementById("stake-a").value);

    var totalStake = stakeA + (stakeA * oddsA / 100);
    var profitLoss = stakeA * oddsA / 100 - stakeA;

    document.getElementById("stake-b").value = (totalStake - stakeA).toFixed(2);
    document.getElementById("total-stake").textContent = totalStake.toFixed(2);
    document.getElementById("profit-loss").textContent = profitLoss.toFixed(2);
}
