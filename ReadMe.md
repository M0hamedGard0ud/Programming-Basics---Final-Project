# DNA to Protein Transcription and Translation Tool 🧬

Welcome to the **DNA to Protein Transcription and Translation Tool**! This project is a command-line interface (CLI) application that allows users to transcribe DNA sequences into RNA 🧬 and then translate the RNA sequences into protein sequences 🧪. This README.md will guide you through the project's functionalities, usage, and scientific significance.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Scientific Background](#scientific-background)
6. [Contributing](#contributing)

## Overview
DNA to Protein is a CLI tool that helps you understand the central dogma of molecular biology 🧬, which describes the flow of genetic information from DNA 🧬 to RNA 🧬 to Protein 🧪. Using this tool, you can input a DNA sequence, validate it, transcribe it to RNA, and translate it into a protein sequence, all with vibrant and informative color-coded outputs.

## Features
- **DNA Sequence Validation** 🧬: Ensures that the DNA sequence contains only valid nucleotides (A, T, C, G).
- **DNA to RNA Transcription** 🧬: Transcribes the input DNA sequence to its corresponding RNA sequence.
- **RNA to Protein Translation** 🧪: Translates the RNA sequence into a protein sequence, adhering to the genetic code.
- **Color-Coded Outputs** 🎨: Utilizes chalk for a visually appealing and informative CLI experience.

## Installation
To install and run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/dna-to-protein.git
    cd dna-to-protein
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    node index.js
    ```

## Usage
1. Run the application using Node.js.
2. Enter a valid DNA sequence when prompted.
3. View the transcribed RNA sequence and the translated protein sequence.
4. The application will continue to prompt for new DNA sequences until you type "exit".

```bash
$ node index.js
```

Example interaction:
```bash
Enter DNA sequence (or type "exit" to quit): ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG
RNA Sequence 🧬: UACCGGUUACAUUACCCGGCGACUUUCCCACGGGCUAUC
Protein Sequence 🧪: Tyrosine Proline Leucine Histidine Tyrosine Proline Glycine Aspartate Phenylalanine Proline Threonine Glycine Stop
Stop codon encountered. Translation terminated.
```

## Scientific Background
The central dogma of molecular biology 🧬 explains how genetic information flows within a biological system:

1. **DNA Transcription** 🧬: The process of copying a segment of DNA into RNA. The RNA sequence is complementary to the DNA sequence.
   - Example: DNA sequence `ATGC` transcribes to RNA sequence `UACG`.

2. **RNA Translation** 🧪: The process by which a protein is synthesized from the RNA sequence. Each set of three nucleotides (codon) corresponds to a specific amino acid or a stop signal.
   - Example: RNA sequence `AUG` translates to the amino acid Methionine.

This tool allows users to explore these fundamental processes interactively.

## Contributing
We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push your changes to your fork and submit a pull request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

---

Dive into the fascinating world of genetics with our DNA to Protein Transcription and Translation Tool 🧬, and transform your understanding of molecular biology!