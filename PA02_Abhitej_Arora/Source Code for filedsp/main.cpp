#include <iostream>
#include<fstream>

using namespace std;

int main() {
    ofstream outFile;
    ifstream inFile;
    string line;
    string input;
    string choice;
    bool foundD = false;
    bool foundF = false;
    bool foundB = false;
    string directory = "directory";
    string inputBuffer, inputD, inputF, inputB;

    getline(cin, inputBuffer);
   // cout << inputBuffer;
    getline(cin, inputD);
    // cout << inputD;
    getline(cin, inputF);

    getline(cin, inputB);

    cout << "Select option between -d, -f and -b:\n";
    cin >> choice;

    cout << "Option " << choice << " was selected.\n";

    if (choice == "-d")
        cout << inputD;

    if (choice == "-f")
        cout << inputF;

    if (choice == "-b")
        cout << inputB;

   // else
        //cout << "Option not valid" << endl;

    return 0;
}
