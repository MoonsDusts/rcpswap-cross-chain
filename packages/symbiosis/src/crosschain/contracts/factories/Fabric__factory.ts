/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import type { Fabric, FabricInterface } from "../Fabric"

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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "rToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sToken",
        type: "address",
      },
    ],
    name: "RepresentationCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rtoken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_chainID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_stokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_stokenSymbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    name: "createRepresentationByAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_syntTokenAdr",
        type: "address",
      },
    ],
    name: "getRealRepresentation",
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
    inputs: [
      {
        internalType: "address",
        name: "_realTokenAdr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_chainID",
        type: "uint256",
      },
    ],
    name: "getSyntRepresentation",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "getSyntRepresentationByKey",
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
    inputs: [
      {
        internalType: "address",
        name: "_synthesis",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "synthesis",
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
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_stoken",
        type: "address",
      },
    ],
    name: "synthesize",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_stoken",
        type: "address",
      },
    ],
    name: "unsynthesize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode =
  "0x608060405234801561001057600080fd5b5061297a806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000d95760003560e01c80638da5cb5b116200008b578063e49029fc1162000062578063e49029fc1462000272578063e7ca9aaf14620002ab578063f2fde38b14620003fb57600080fd5b80638da5cb5b14620001fe578063a8160b761462000210578063c4d66de8146200024957600080fd5b8063506890a011620000c0578063506890a01462000146578063715018a614620001bd5780637cf8f32714620001c957600080fd5b8063161acb4714620000de5780632af896fb1462000132575b600080fd5b6200011660048036036020811015620000f657600080fd5b50356001600160a01b039081166000908152606760205260409020541690565b604080516001600160a01b039092168252519081900360200190f35b60655462000116906001600160a01b031681565b62000116600480360360408110156200015e57600080fd5b5060408051823560601b6bffffffffffffffffffffffff1916602082810191909152928301356034808301919091528251808303909101815260549091018252805190830120600090815260669092529020546001600160a01b031690565b620001c762000424565b005b6200011660048036036020811015620001e157600080fd5b50356000908152606660205260409020546001600160a01b031690565b6033546001600160a01b031662000116565b620001c7600480360360608110156200022857600080fd5b506001600160a01b0381358116916020810135916040909101351662000492565b620001c7600480360360208110156200026157600080fd5b50356001600160a01b031662000553565b620001c7600480360360608110156200028a57600080fd5b506001600160a01b0381358116916020810135916040909101351662000699565b620001c7600480360360a0811015620002c357600080fd5b6001600160a01b0382351691602081013591810190606081016040820135640100000000811115620002f457600080fd5b8201836020820111156200030757600080fd5b803590602001918460018302840111640100000000831117156200032a57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156200037e57600080fd5b8201836020820111156200039157600080fd5b80359060200191846001830284011164010000000083111715620003b457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff1691506200073c9050565b620001c7600480360360208110156200041357600080fd5b50356001600160a01b0316620007ae565b6033546001600160a01b03163314620004845760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b62000490600062000896565b565b6065546001600160a01b03163314620004dd5760405162461bcd60e51b8152600401808060200182810382526021815260200180620028fb6021913960400191505060405180910390fd5b806001600160a01b0316639dc29fac84846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156200053557600080fd5b505af11580156200054a573d6000803e3d6000fd5b50505050505050565b600054610100900460ff16620005705760005460ff161562000574565b303b155b620005e85760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016200047b565b600054610100900460ff161580156200062857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b6200063262000900565b606580547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03841617905580156200069557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b6065546001600160a01b03163314620006e45760405162461bcd60e51b8152600401808060200182810382526021815260200180620028fb6021913960400191505060405180910390fd5b806001600160a01b03166340c10f1984846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156200053557600080fd5b6033546001600160a01b03163314620007985760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200047b565b620007a7858585858562000993565b5050505050565b6033546001600160a01b031633146200080a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200047b565b6001600160a01b038116620008885760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016200047b565b620008938162000896565b50565b603380546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166200097f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016200047b565b6200098962000cb6565b6200049062000d35565b6001600160a01b038516620009ef576040805162461bcd60e51b815260206004820181905260248201527f53796d623a2072746f6b656e20697320746865207a65726f2061646472657373604482015290519081900360640190fd5b604080516bffffffffffffffffffffffff19606088901b16602080830191909152603480830188905283518084039091018152605490920183528151918101919091206000908152606690915220546001600160a01b0316801562000a865760405162461bcd60e51b81526004018080602001828103825260298152602001806200291c6029913960400191505060405180910390fd5b600084848460405162000a999062000dbf565b60ff82166040820152606080825284519082015283518190602080830191608084019188019080838360005b8381101562000adf57818101518382015260200162000ac5565b50505050905090810190601f16801562000b0d5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b8381101562000b4257818101518382015260200162000b28565b50505050905090810190601f16801562000b705780820380516001836020036101000a031916815260200191505b5095505050505050604051809103906000f08015801562000b95573d6000803e3d6000fd5b5090508660676000836001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508060666000898960405160200180836001600160a01b031660601b81526014018281526020019250505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055507fe33e6b41ee9908e3919a380a52ae7059282c36b87adeee0d2ac1b05dfc50be6f87878360405180846001600160a01b03168152602001838152602001826001600160a01b03168152602001935050505060405180910390a150505050505050565b600054610100900460ff16620004905760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016200047b565b600054610100900460ff1662000db45760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016200047b565b620004903362000896565b611b2d8062000dce8339019056fe6101806040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140523480156200003757600080fd5b5060405162001b2d38038062001b2d8339810160408190526200005a9162000359565b6040518060400160405280600981526020016853796d62696f73697360b81b81525080604051806040016040528060018152602001603160f81b8152508585620000b3620000ad620001a860201b60201c565b620001ac565b8151620000c8906004906020850190620001fc565b508051620000de906005906020840190620001fc565b5050825160208085019190912083518483012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c0019052805194019390932091935091906080523060601b60c05261012052505050505060f81b7fff00000000000000000000000000000000000000000000000000000000000000166101605250620004319050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200020a90620003de565b90600052602060002090601f0160209004810192826200022e576000855562000279565b82601f106200024957805160ff191683800117855562000279565b8280016001018555821562000279579182015b82811115620002795782518255916020019190600101906200025c565b50620002879291506200028b565b5090565b5b808211156200028757600081556001016200028c565b600082601f830112620002b457600080fd5b81516001600160401b0380821115620002d157620002d16200041b565b604051601f8301601f19908116603f01168101908282118183101715620002fc57620002fc6200041b565b816040528381526020925086838588010111156200031957600080fd5b600091505b838210156200033d57858201830151818301840152908201906200031e565b838211156200034f5760008385830101525b9695505050505050565b6000806000606084860312156200036f57600080fd5b83516001600160401b03808211156200038757600080fd5b6200039587838801620002a2565b94506020860151915080821115620003ac57600080fd5b50620003bb86828701620002a2565b925050604084015160ff81168114620003d357600080fd5b809150509250925092565b600181811c90821680620003f357607f821691505b602082108114156200041557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160a05160c05160601c60e0516101005161012051610140516101605160f81c6116906200049d60003960006101c30152600061074601526000610d3301526000610d8201526000610d5d01526000610cb601526000610ce001526000610d0a01526116906000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063715018a6116100cd578063a457c2d711610081578063d505accf11610066578063d505accf146102bd578063dd62ed3e146102d0578063f2fde38b1461030957600080fd5b8063a457c2d714610297578063a9059cbb146102aa57600080fd5b80638da5cb5b116100b25780638da5cb5b1461026157806395d89b411461027c5780639dc29fac1461028457600080fd5b8063715018a6146102465780637ecebe001461024e57600080fd5b8063313ce56711610124578063395093511161010957806339509351146101f557806340c10f191461020857806370a082311461021d57600080fd5b8063313ce567146101bc5780633644e515146101ed57600080fd5b806306fdde0314610156578063095ea7b31461017457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015e61031c565b60405161016b9190611575565b60405180910390f35b61018761018236600461154b565b6103ae565b604051901515815260200161016b565b6003545b60405190815260200161016b565b6101876101b736600461149c565b6103c4565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161016b565b61019b610488565b61018761020336600461154b565b610497565b61021b61021636600461154b565b6104d3565b005b61019b61022b366004611447565b6001600160a01b031660009081526001602052604090205490565b61021b61053b565b61019b61025c366004611447565b6105a1565b6000546040516001600160a01b03909116815260200161016b565b61015e6105c1565b61021b61029236600461154b565b6105d0565b6101876102a536600461154b565b610634565b6101876102b836600461154b565b6106e5565b61021b6102cb3660046114d8565b6106f2565b61019b6102de366004611469565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61021b610317366004611447565b610856565b60606004805461032b906115f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610357906115f9565b80156103a45780601f10610379576101008083540402835291602001916103a4565b820191906000526020600020905b81548152906001019060200180831161038757829003601f168201915b5050505050905090565b60006103bb338484610938565b50600192915050565b60006103d1848484610a91565b6001600160a01b0384166000908152600260209081526040808320338452909152902054828110156104705760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61047d8533858403610938565b506001949350505050565b6000610492610ca9565b905090565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916103bb9185906104ce9086906115ca565b610938565b6000546001600160a01b0316331461052d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610467565b6105378282610dd0565b5050565b6000546001600160a01b031633146105955760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610467565b61059f6000610eaf565b565b6001600160a01b0381166000908152600660205260408120545b92915050565b60606005805461032b906115f9565b6000546001600160a01b0316331461062a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610467565b6105378282610f17565b3360009081526002602090815260408083206001600160a01b0386168452909152812054828110156106ce5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610467565b6106db3385858403610938565b5060019392505050565b60006103bb338484610a91565b834211156107425760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610467565b60007f00000000000000000000000000000000000000000000000000000000000000008888886107718c611094565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006107cc826110bc565b905060006107dc82878787611125565b9050896001600160a01b0316816001600160a01b03161461083f5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610467565b61084a8a8a8a610938565b50505050505050505050565b6000546001600160a01b031633146108b05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610467565b6001600160a01b03811661092c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610467565b61093581610eaf565b50565b6001600160a01b0383166109b35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b038216610a2f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610b0d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b038216610b895760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b03831660009081526001602052604090205481811015610c185760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b03808516600090815260016020526040808220858503905591851681529081208054849290610c4f9084906115ca565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c9b91815260200190565b60405180910390a350505050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610d0257507f000000000000000000000000000000000000000000000000000000000000000046145b15610d2c57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6001600160a01b038216610e265760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610467565b8060036000828254610e3891906115ca565b90915550506001600160a01b03821660009081526001602052604081208054839290610e659084906115ca565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038216610f935760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b038216600090815260016020526040902054818110156110225760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b03831660009081526001602052604081208383039055600380548492906110519084906115e2565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610a84565b6001600160a01b03811660009081526006602052604090208054600181018255905b50919050565b60006105bb6110c9610ca9565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006111368787878761114d565b915091506111438161123a565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156111845750600090506003611231565b8460ff16601b1415801561119c57508460ff16601c14155b156111ad5750600090506004611231565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611201573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661122a57600060019250925050611231565b9150600090505b94509492505050565b600081600481111561124e5761124e611644565b14156112575750565b600181600481111561126b5761126b611644565b14156112b95760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610467565b60028160048111156112cd576112cd611644565b141561131b5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610467565b600381600481111561132f5761132f611644565b14156113a35760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610467565b60048160048111156113b7576113b7611644565b14156109355760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610467565b80356001600160a01b038116811461144257600080fd5b919050565b60006020828403121561145957600080fd5b6114628261142b565b9392505050565b6000806040838503121561147c57600080fd5b6114858361142b565b91506114936020840161142b565b90509250929050565b6000806000606084860312156114b157600080fd5b6114ba8461142b565b92506114c86020850161142b565b9150604084013590509250925092565b600080600080600080600060e0888a0312156114f357600080fd5b6114fc8861142b565b965061150a6020890161142b565b95506040880135945060608801359350608088013560ff8116811461152e57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561155e57600080fd5b6115678361142b565b946020939093013593505050565b600060208083528351808285015260005b818110156115a257858101830151858201604001528201611586565b818111156115b4576000604083870101525b50601f01601f1916929092016040019392505050565b600082198211156115dd576115dd61162e565b500190565b6000828210156115f4576115f461162e565b500390565b600181811c9082168061160d57607f821691505b602082108114156110b657634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea26469706673582212208bf71d9ddf309d88a97b8c028826275a9599d3cdb2db5b0547bfe39a71698ac864736f6c6343000807003353796d623a2063616c6c6572206973206e6f74207468652073796e74686573697353796d623a20746f6b656e20726570726573656e746174696f6e20616c726561647920657869737473a2646970667358221220a60cf18f476b01d9b1b1871bf88e40a4dd9d1fdce6e06b6bc111cfbb8e5d045264736f6c63430008070033"

type FabricConstructorParams = any

const isSuperArgs = (
  xs: FabricConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Fabric__factory extends ContractFactory {
  constructor(...args: FabricConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = "Fabric"
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Fabric> {
    return super.deploy(overrides || {}) as Promise<Fabric>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): Fabric {
    return super.attach(address) as Fabric
  }
  override connect(signer: Signer): Fabric__factory {
    return super.connect(signer) as Fabric__factory
  }
  static readonly contractName: "Fabric"
  public readonly contractName: "Fabric"
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): FabricInterface {
    return new utils.Interface(_abi) as FabricInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Fabric {
    return new Contract(address, _abi, signerOrProvider) as Fabric
  }
}
