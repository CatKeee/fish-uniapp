class Util {
  public static getDate(date: Date): string {
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  }

  
}

export default new Util();
