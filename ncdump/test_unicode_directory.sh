#!/bin/sh
#
# Test to make sure ncdump works with a subdirectory which starts
# with a unicode character.
# See https://github.com/Unidata/netcdf-c/issues/1666 for more information.
# Ward Fisher

if test "x$srcdir" = x ; then srcdir=`pwd`; fi
. ../test_common.sh

ERR() {
    RES=$?
    if [ $RES -ne 0 ]; then
        echo "Error found: $RES"
        exit $RES
    fi
}

#UNISTRING=$(echo '\xe6\xb5\xb7')
UNISTRING='海'

echo ""
echo "Creating Unicode String Directory ${UNISTRING}"
mkdir -p "${UNISTRING}"; ERR
ls -ld "${UNISTRING}"

# Do test for netcdf-3 and (optionally) netcdf-4

# Every path below is written "./${UNISTRING}/..." rather than
# "${UNISTRING}/...". Both name the same file, but only the first survives
# Git-Bash. MSYS translates POSIX paths in the argv of a native (non-MSYS)
# program, and given a relative path whose first component is not ASCII it
# mistakes the remainder for an absolute path and expands it against the
# MSYS root, so ncgen is handed
#   <CJK>C:/Users/runner/micromamba/envs/CI/Library/tst_utf.nc
# and nc_create() rightly rejects it. A leading "./" makes the argument
# unambiguously relative and MSYS leaves it alone. The same path spelled
# with a backslash also survives, which is what rules netCDF out:
# parsepath() rewrites every backslash to a forward slash before it looks
# at anything, so it cannot tell the two spellings apart.
echo "*** Generating netcdf-3 binary file ./${UNISTRING}/tst_utf.nc..."
${NCGEN} -b -o "./${UNISTRING}/tst_utf.nc" "${srcdir}/ref_tst_utf8.cdl"; ERR
echo "*** Accessing binary file ./${UNISTRING}/tst_utf.nc..."
${NCDUMP} -h "./${UNISTRING}/tst_utf.nc"; ERR

if test "x$FEATURE_HDF5" = xyes ; then
echo "*** Generating netcdf-4 binary file ./${UNISTRING}/tst_utf.nc..."
rm -f "./${UNISTRING}/tst_utf.nc"
${NCGEN} -4 -b -o "./${UNISTRING}/tst_utf.nc" "${srcdir}/ref_tst_utf8.cdl"; ERR
echo "*** Accessing binary file ./${UNISTRING}/tst_utf.nc..."
${NCDUMP} -h "./${UNISTRING}/tst_utf.nc"; ERR
fi

echo "Test Passed. Cleaning up."
rm -fr "${UNISTRING}"; ERR
