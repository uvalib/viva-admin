module ApplicationHelper
  def org_name(code)
    name = ""
    case code
      when 1
        name = "Alexandria Library"
      when 2
        name = "Averett University"
      when 3
        name = "Bridgewater College"
      when 4
        name = "College of William and Mary"
      when 5
        name = "Colonial Williamsburg"
      when 6
        name = "Fairfax County Public Library"
      when 7
        name = "George Mason University"
      when 8
        name = "Gunston Hall Library & Archives"
      when 9
        name = "Handley Regional Library"
      when 10
        name = "Hollins University"
      when 11
        name = "James Madison University"
      when 12
        name = "Library of Virgina"
      when 13
        name = "Longwood University"
      when 14
        name = "Montgomery County Circuit Court"
      when 15
        name = "Norfolk Public Library"
      when 16
        name = "Old Dominion University"
      when 17
        name = "Roanoke College"
      when 18
        name = "Roanoke Public Libraries"
      when 19
        name = "Radford University"
      when 20
        name = "Randolph-Macon College"
      when 21
        name = "Shenandoah County Library"
      when 22
        name = "Thomas Balch Library"
      when 23
        name = "University of Mary Washington"
      when 24
        name = "University of Richmond"
      when 25
        name = "University of Virginia, The Center for Nursing Historical Inquiry"
      when 26
        name = "University of Virginia, Health Sciences Library"
      when 27
        name = "University of Virginia, Law Library"
      when 28
        name = "University of Virginia, Music Library"
      when 29
        name = "University of Virginia, Special Collections"
      when 30
        name = "Virginia Commonwealth University, James Cabell Library"
      when 31
        name = "Virginia Commonwealth University, Tompkins-McCaw Library"
      when 32
        name = "Virginia Historical Society"
      when 33
        name = "Virginia Military Institute"
      when 34
        name = "Virginia Museum of Fine Arts"
      when 35
        name = "Virginia Polytechnic Institute and State University"
      when 36
        name = "Virginia State Law Library, Supreme Court of Virginia"
      when 37
        name = "Virginia State University"
      when 38
        name = "Virginia Union University"
      when 39
        name = "Washington and Lee University, Law School"
      when 40
        name = "Washington and Lee University, Leyburn Library"
      when 41
        name = "Woodrow Wilson Presidential Library & Museum"
      when 42
        name = "Wytheville Community College"
      when 43
        name = "Wythe County Historical Society"
      else
        name = ""
    end
    return name
  end
end
