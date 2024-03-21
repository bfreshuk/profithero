function calculateStakes() {
    var oddsA = parseFloat(document.getElementById("odds-a").value);
    var oddsB = parseFloat(document.getElementById("odds-b").value);
    var stakeA = parseFloat(document.getElementById("stake-a").value);

    var stakeB = (stakeA * oddsA) / oddsB;
    var totalStake = stakeA + stakeB;
    
    // Calculate profit/loss assuming Bet A wins and Bet B loses
    var profitLossA = (oddsA - 1) * stakeA - stakeB;

    // Calculate profit/loss assuming Bet B wins and Bet A loses
    var profitLossB = (oddsB - 1) * stakeB - stakeA;

    document.getElementById("stake-b").value = stakeB.toFixed(2);

    document.getElementById("results").innerHTML =
        "<p>Bet A stake: £" + stakeA.toFixed(2) + "</p>" +
        "<p>Bet B stake: £" + stakeB.toFixed(2) + "</p>" +
        "<p>Total stake: £" + totalStake.toFixed(2) + "</p>" +
        "<p>Profit/Loss (if A wins): £" + profitLossA.toFixed(2) + "</p>" +
        "<p>Profit/Loss (if B wins): £" + profitLossB.toFixed(2) + "</p>";
}
