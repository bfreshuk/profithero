function calculateStakes() {
    var oddsA = parseFloat(document.getElementById("odds-a").value);
    var oddsB = parseFloat(document.getElementById("odds-b").value);
    var stakeA = parseFloat(document.getElementById("stake-a").value);

    var stakeB = (stakeA * oddsA) / oddsB;
    var totalStake = stakeA + stakeB;
    var profitLoss = stakeA * (oddsA - 1) - totalStake;

    document.getElementById("stake-b").value = stakeB.toFixed(2);

    document.getElementById("total-stake").textContent = totalStake.toFixed(2);
    document.getElementById("profit-loss").textContent = profitLoss.toFixed(2);
}
