public class BuilderPatternTest {

    public static void main(String[] args) {

        // Gaming Computer
        Computer gamingPC = new Computer.Builder()
                .setCPU("Intel Core i9")
                .setRAM(32)
                .setStorage(1000)
                .setGraphicsCard("NVIDIA RTX 4080")
                .setOperatingSystem("Windows 11")
                .build();

        // Office Computer
        Computer officePC = new Computer.Builder()
                .setCPU("Intel Core i5")
                .setRAM(16)
                .setStorage(512)
                .setOperatingSystem("Windows 10")
                .build();

        // Budget Computer
        Computer budgetPC = new Computer.Builder()
                .setCPU("AMD Ryzen 3")
                .setRAM(8)
                .setStorage(256)
                .build();

        System.out.println("Gaming PC");
        gamingPC.display();

        System.out.println("Office PC");
        officePC.display();

        System.out.println("Budget PC");
        budgetPC.display();
    }
}