import readlineSync from "readline-sync";
import chalk from "chalk";

// Colors
const color1 = "#EE6C3B";
const color2 = "#D12935";
const color3 = "#FFD700";
const color4 = "#6B45C3";

// Function to transcribe DNA to RNA based on the given rules
function transcribeDNAtoRNA(dnaSequence) {
    const transcriptionMap = {
        T: "A",
        A: "U",
        C: "G",
        G: "C",
    };

    return dnaSequence
        .split("")
        .map((nucleotide) => transcriptionMap[nucleotide] || nucleotide)
        .join("");
}

// Function to check if a DNA sequence is valid
function isValidDNASequence(sequence) {
    for (let i = 0; i < sequence.length; i++) {
        if (
            sequence[i] !== "A" &&
            sequence[i] !== "T" &&
            sequence[i] !== "C" &&
            sequence[i] !== "G"
        ) {
            return false;
        }
    }
    return true;
}

// Codon to amino acid mapping, including stop codons
const codonMap = {
    'AUG': 'Methionine', 'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
    'UUA': 'Leucine', 'UUG': 'Leucine', 'UCU': 'Serine', 'UCC': 'Serine',
    'UCA': 'Serine', 'UCG': 'Serine', 'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
    'UGU': 'Cysteine', 'UGC': 'Cysteine', 'UGG': 'Tryptophan', 'CUU': 'Leucine',
    'CUC': 'Leucine', 'CUA': 'Leucine', 'CUG': 'Leucine', 'CCU': 'Proline',
    'CCC': 'Proline', 'CCA': 'Proline', 'CCG': 'Proline', 'CAU': 'Histidine',
    'CAC': 'Histidine', 'CAA': 'Glutamine', 'CAG': 'Glutamine', 'CGU': 'Arginine',
    'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine', 'AUU': 'Isoleucine',
    'AUC': 'Isoleucine', 'AUA': 'Isoleucine', 'ACU': 'Threonine', 'ACC': 'Threonine',
    'ACA': 'Threonine', 'ACG': 'Threonine', 'AAU': 'Asparagine', 'AAC': 'Asparagine',
    'AAA': 'Lysine', 'AAG': 'Lysine', 'AGU': 'Serine', 'AGC': 'Serine',
    'AGA': 'Arginine', 'AGG': 'Arginine', 'GUU': 'Valine', 'GUC': 'Valine',
    'GUA': 'Valine', 'GUG': 'Valine', 'GCU': 'Alanine', 'GCC': 'Alanine',
    'GCA': 'Alanine', 'GCG': 'Alanine', 'GAU': 'Aspartate', 'GAC': 'Aspartate',
    'GAA': 'Glutamate', 'GAG': 'Glutamate', 'GGU': 'Glycine', 'GGC': 'Glycine',
    'GGA': 'Glycine', 'GGG': 'Glycine', 'UAA': 'Stop', 'UAG': 'Stop', 'UGA': 'Stop'
};

// Function to transcribe and translate DNA to RNA and protein
function transcribeAndTranslate() {
    console.clear();
    console.log(
        chalk.hex(color3)(
            `\tWelcome to \n\t${chalk.bgHex(color1)(
                `                      `
            )}\n\t${chalk.bgHex(color2)(
                `  ${chalk.hex(color1)("DNA TO PROTEIN")}  `
            )}\n\n\t\tTranscription and Translation Tool\n`
        )
    );

    while (true) {
        // Get DNA sequence from input
        const dnaSequence = readlineSync
            .question(chalk.green('Enter DNA sequence (or type "exit" to quit): '))
            .trim()
            .toUpperCase();

        if (dnaSequence === "EXIT") {
            console.log("Exiting...");
            break;
        }

        // Input validation
        if (!isValidDNASequence(dnaSequence)) {
            console.log(
                chalk.red(
                    "Invalid DNA sequence. Please enter a sequence containing only A, T, C, and G."
                )
            );
            continue;
        }

        // Transcribe DNA to RNA
        const rnaSequence = transcribeDNAtoRNA(dnaSequence);

        // Display RNA sequence
        console.log(chalk.hex(color4)(`RNA Sequence: ${rnaSequence}`));

        // Translate RNA to protein
        let proteinSequence = "";
        let stopCodonEncountered = false;
        for (let i = 0; i < rnaSequence.length; i += 3) {
            const codon = rnaSequence.slice(i, i + 3);
            if (codonMap[codon]) {
                if (codonMap[codon] === "Stop") {
                    stopCodonEncountered = true;
                    break;
                }
                proteinSequence += codonMap[codon] + " ";
            }
        }

        // Display protein sequence
        if (stopCodonEncountered) {
            console.log(
                chalk.hex(color4)("Protein Sequence: " + proteinSequence.trim())
            );
            console.log(
                chalk.hex(color2)("Stop codon encountered. Translation terminated.")
            );
        } else {
            console.log(
                chalk.hex(color4)("Protein Sequence: " + proteinSequence.trim())
            );
        }

        // Prompt for next step
        readlineSync.question(chalk.yellow("Press Enter to continue..."));
    }
}

// Call the function to execute
transcribeAndTranslate();
