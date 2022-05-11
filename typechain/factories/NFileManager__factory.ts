/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFileManager, NFileManagerInterface } from "../NFileManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nfileTAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61080a8061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634b3c3e531461005c578063715018a61461007a5780638da5cb5b14610084578063a0712d68146100a2578063f2fde38b146100d2575b600080fd5b6100646100ee565b60405161007191906105ff565b60405180910390f35b610082610114565b005b61008c61019c565b60405161009991906105ff565b60405180910390f35b6100bc60048036038101906100b79190610554565b6101c5565b6040516100c99190610651565b60405180910390f35b6100ec60048036038101906100e79190610502565b6102ff565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61011c6103f7565b73ffffffffffffffffffffffffffffffffffffffff1661013a61019c565b73ffffffffffffffffffffffffffffffffffffffff1614610190576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101879061068c565b60405180910390fd5b61019a60006103ff565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006101cf6103f7565b73ffffffffffffffffffffffffffffffffffffffff166101ed61019c565b73ffffffffffffffffffffffffffffffffffffffff1614610243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023a9061068c565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663156e29f6338460016040518463ffffffff1660e01b81526004016102a39392919061061a565b602060405180830381600087803b1580156102bd57600080fd5b505af11580156102d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f5919061052b565b5060019050919050565b6103076103f7565b73ffffffffffffffffffffffffffffffffffffffff1661032561019c565b73ffffffffffffffffffffffffffffffffffffffff161461037b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103729061068c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e29061066c565b60405180910390fd5b6103f4816103ff565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000813590506104d28161078f565b92915050565b6000815190506104e7816107a6565b92915050565b6000813590506104fc816107bd565b92915050565b60006020828403121561051457600080fd5b6000610522848285016104c3565b91505092915050565b60006020828403121561053d57600080fd5b600061054b848285016104d8565b91505092915050565b60006020828403121561056657600080fd5b6000610574848285016104ed565b91505092915050565b610586816106bd565b82525050565b610595816106cf565b82525050565b6105a481610705565b82525050565b60006105b76026836106ac565b91506105c282610717565b604082019050919050565b60006105da6020836106ac565b91506105e582610766565b602082019050919050565b6105f9816106fb565b82525050565b6000602082019050610614600083018461057d565b92915050565b600060608201905061062f600083018661057d565b61063c60208301856105f0565b610649604083018461059b565b949350505050565b6000602082019050610666600083018461058c565b92915050565b60006020820190508181036000830152610685816105aa565b9050919050565b600060208201905081810360008301526106a5816105cd565b9050919050565b600082825260208201905092915050565b60006106c8826106db565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610710826106fb565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b610798816106bd565b81146107a357600080fd5b50565b6107af816106cf565b81146107ba57600080fd5b50565b6107c6816106fb565b81146107d157600080fd5b5056fea26469706673582212206ad0e3cb23aa435048e666a64400c13b59d72505c39e3576eeeffb287e07848064736f6c63430008040033";

export class NFileManager__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFileManager> {
    return super.deploy(overrides || {}) as Promise<NFileManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFileManager {
    return super.attach(address) as NFileManager;
  }
  connect(signer: Signer): NFileManager__factory {
    return super.connect(signer) as NFileManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFileManagerInterface {
    return new utils.Interface(_abi) as NFileManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFileManager {
    return new Contract(address, _abi, signerOrProvider) as NFileManager;
  }
}