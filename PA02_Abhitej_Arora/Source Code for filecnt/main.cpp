/*
 *adding comments to check if goes through
 */


#include <iostream>
#include <stdio.h>
#include <filesystem>
#include <sysexits.h>
#include <sys/stat.h>

using namespace std::__fs::filesystem;
using namespace std;


int main() {

    //Initialize all the basic int variables needed for the iteration and count
    int countOfFiles = 0;
    int countOfDirectories = 0;
    int totalSize = 0;
    path pathToShow;

    //Header formatting and asking for input
    cout << "Files Counter Program\n" << endl;
    cout << "Please enter the path to the directory: " << endl;
   // pathToShow = "/Users/apple/Desktop/flight";
   cin >> pathToShow;

    //statement checks if the input is a directory using filesystem
    if (is_directory(pathToShow))
    {
        cout << "Path to Directory is Valid\n";

        //now we iterate through the components inside the directory
        for (directory_entry const &entry : directory_iterator(pathToShow))
        {
            if (entry.is_regular_file()) //checking whether component is a file or not
            {
                //if the loop gets in, it iterates the count and adds to the size
                countOfFiles++;
                totalSize += entry.file_size();
            }
            if (entry.is_directory()) //checking whether component is a directory
            {
                countOfDirectories++; //adds to the count of total directories
            }
        }

        //formatting the output
        cout << "The total number of directories in directory ";
        cout << pathToShow;
        cout << " is: ";
        cout << countOfDirectories;
        cout << endl;
        cout << "The total number of files in directory ";
        cout << pathToShow;
        cout << " is: ";
        cout << countOfFiles;
        cout << endl;
        cout << "The total number of bytes occupied by all files in directory ";
        cout << pathToShow;
        cout << " is: ";
        cout << totalSize;
        cout << endl;
    }

        else //if the initial input was not a directory
        cout << "Directory " << pathToShow << " not found";

    return 0;
}



