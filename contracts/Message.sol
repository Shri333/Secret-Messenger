// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Excerpted from the Udacity Blockchain Nanodegree lesson on Ethereum Fundamentals
// with some modifications (using memory)
contract Message {
  string message;

  function getMessage() public view returns (string memory) {
    return message;
  }

  function setMessage(string memory m) public {
    message = m;
  }
}
